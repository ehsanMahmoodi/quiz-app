const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "5px",
        borderRadius: "4px",
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;
