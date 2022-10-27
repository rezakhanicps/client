import ReactDOM from 'react-dom';

interface ModalProps {
    title: string;
    content: string;
    actions: JSX.Element;
    onDismiss: () => void;
}

const Modal: React.FC<ModalProps> = ({
    title,
    content,
    actions,
    onDismiss,
}) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={onDismiss}>
            <div
                className="ui standard modal visible active"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="header">{title}</div>
                <div className="content">{content}</div>
                <div className="actions">{actions}</div>
            </div>
        </div>,
        //@ts-ignore
        document.querySelector('#modal')
    );
};

export default Modal;
