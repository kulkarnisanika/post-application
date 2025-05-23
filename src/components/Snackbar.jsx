const Snackbar = ({ message, onClose }) => (
  <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-400 text-amber-50 px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4 z-50">
    <span className="font-medium">{message}</span>
    <button onClick={onClose} className="text-amber-50 hover:text-teal-200">
      ✕
    </button>
  </div>
);


export default Snackbar