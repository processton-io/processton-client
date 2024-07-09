
export default function Error({ code = '', error_msg = '', error_description = ''  }) {
    
    return (
        <div className="h-side-bar w-full bg-gray-100 flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md">
                    <div className="text-5xl font-dark font-bold">{code}</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal" >{error_msg} </p>
                    <p className="mb-8">{error_description}</p>
                
                </div>
            </div>
        </div>
    );
}
