import reactDom from "react-dom";

const PortalModal = ({ children }) => {
  const portal = document.getElementById('modal-root')
  return reactDom.createPortal(children, portal)
}

export default PortalModal