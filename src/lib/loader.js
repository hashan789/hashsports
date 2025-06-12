import { TailSpin } from "react-loader-spinner";

export const Loader = () => {
    return (
        <TailSpin
            height="20"
            width="20"
            color="#ffffff"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
}; 