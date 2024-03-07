import { useState, useEffect } from 'react';

function useSnackBarMessage(apiSuccess: boolean, successMessage: string, errorMessage: string) {
  const [showMessages, setShowMessages] = useState({
    showSnackBar: false,
    snackBarMessage: '',
    messageType: ''
  });
  const handleStateChange = async () => {
    setShowMessages((prev) => ({
      ...prev,
      showSnackBar: false,
      snackBarMessage: '',
      messageType: ''
    }));
  };
  useEffect(() => {
    if (apiSuccess === true) {
      setShowMessages((prev) => ({
        ...prev,
        showSnackBar: true,
        snackBarMessage: successMessage,
        messageType: 'success'
      }));
    } else if (errorMessage) {
      setShowMessages((prev) => ({
        ...prev,
        showSnackBar: true,
        snackBarMessage: errorMessage,
        messageType: 'error'
      }));
    }
  }, [apiSuccess, successMessage, errorMessage]);

  return [showMessages, setShowMessages];
}

export default useSnackBarMessage;
