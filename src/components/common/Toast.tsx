export function Toast({message,onClose}:{message?:string;onClose:()=>void}){if(!message)return null;return <button className="toast" onClick={onClose}>{message}</button>;}
