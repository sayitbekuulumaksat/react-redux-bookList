import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { clearError, selectErrorMassege } from "../../redux/slices/errorSlice";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Error = () => {
  const errorMassage = useSelector(selectErrorMassege);
  const dispatch = useDispatch();
  useEffect(() => {
    if (errorMassage) {
      toast.info(errorMassage);
      dispatch(clearError());
    }
  }, [errorMassage, dispatch]);
  return <ToastContainer position='top-right' autoClose={2000} />;
};

export default Error;
