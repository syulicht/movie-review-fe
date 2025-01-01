import {
  RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

type SnackbarActions = {
  show: (message: string) => void;
  close: () => void;
};

type Props = {
  ref: RefObject<SnackbarActions | null>;
};

export const Snackbar = ({ ref }: Props): React.JSX.Element => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [message, setMessage] = useState("");

  useImperativeHandle(
    ref,
    () => ({
      show: (message) => {
        setIsDisplayed(true);
        setMessage(message);
      },
      close: () => {
        setIsDisplayed(false);
      },
    }),
    [],
  );

  useEffect(() => {
    if (isDisplayed) {
      const timeout = setTimeout(() => setIsDisplayed(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [isDisplayed]);

  return isDisplayed ? (
    <div
      className={
        "fixed top-7 left-7 py-5 px-8 rounded-xl bg-[#0080de] animate-slide-in-top"
      }
    >
      <p className="text-white font-bold text-xl">{message}</p>
    </div>
  ) : (
    <></>
  );
};

export const useSnackbar = () => {
  const snackbarRef = useRef<SnackbarActions>(null);

  const showSnackbar = (message: string) =>
    snackbarRef.current && snackbarRef.current.show(message);
  const closeSnackbar = () =>
    snackbarRef.current && snackbarRef.current.close();

  return {
    snackbarRef,
    showSnackbar,
    closeSnackbar,
  };
};
