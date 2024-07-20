import { useEffect } from "react"

/**
 * @param {*} ref 클릭 영역 확인 
 * @param {*} handler  클릭 영역 밖인 경우 실행할 handler
 */
export default function useOnClickOutside(ref, handler) {

    useEffect(() => {
        const listener = (event) => {
            if(!ref.current || ref.current.contains(event.target)){
                return;
            }
            handler();
        };

        document.addEventListener('mousedown',listener);
        document.addEventListener('touchstart', listener);

    return() => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
    }   


    },[ref,handler])
}