"use server";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL as string,
  process.env.SUPABASE_SERVICE_KEY as string,
);

export const uploadAvatar = async (file: File, url: string) => {
  const { data, error } = await supabase.storage
    .from("account_icon")
    .upload(url, file, {
      cacheControl: "3600",
      upsert: true, // 上書きする場合はupsertをtrueに
    });
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
};

export const downloadAvatar = async (url: string) => {
  const { data: urlData } = supabase.storage
    .from("account_icon")
    .getPublicUrl(url);
  return urlData.publicUrl + "?cache_bust=" + new Date().getTime();
};
