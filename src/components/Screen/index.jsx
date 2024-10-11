

const Screen = ({children}) =>{

    return(
        <div className="w-3/5 h-[500px] bg-blue-300 rounded-xl mb-5 flex flex-col items-center">
            {children}
        </div>
    );

};

export { Screen };