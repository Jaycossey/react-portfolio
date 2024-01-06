import Presentation from './Presentation';

const Portfolio = () => {
    return (
        <>
            {/* Page Container */}
            <div className="w-screen h-screen bg-slate-600">
                {/* carousel display container */}
                <div className="h-screen flex flex-row gap-20 m-auto text-center items-center justify-center">
                    {/* Portfolio piece [1], click to bring to focus */}
                    <div className="h-1/3 w-1/5 border-2 border-red-300">
                        <p>PORTFOLIO PIECE LEFT HAVE HALF TRANSPARENT</p>
                    </div>

                    {/* Center focus Portfolio [2] These indexes will be important */}
                    <div className="h-1/2 w-1/3 border-2 rounded-xl p-2">
                        <Presentation type="main" />
                    </div>

                    {/* Portfolio [3] 3rd shown half transparent */}
                    <div className="h-1/3 w-1/5 border-2">
                        <p>PORTFOLIO PIECE RIGHT HALF TRANSPARENT</p>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Portfolio;