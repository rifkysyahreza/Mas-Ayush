import useFormDetails from "../../hooks/useFormDetails";

const Index = () => {
  const { message } = useFormDetails();

  const showData = () => {
    if (message && message.length > 0) {
      console.log(message[message.length - 1]);
    } else {
      console.log("No message available");
    }
  };

  return (
    <div>
      <button className="px-4 py-2 border-2" onClick={showData}>
        Show Data
      </button>
    </div>
  );
};

export default Index;
