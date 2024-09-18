type SpinnerProps = {
  loading: boolean;
}

const Spinner = ({ loading = false }: SpinnerProps) => {
  if (!loading) {
    return null; // Don't render anything if loading is false
  }

  return (
    <div className="spinner">
      <div className="animate-ping w-16 h-16 m-8 rounded-full bg-sky-600"></div>
    </div>
  );
};

export default Spinner;
