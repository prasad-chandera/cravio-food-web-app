const Shimmer = () => {
    return (
        <div className="shimmer-container" >
            {
                [...Array(12)]?.map((_,index) => (
                    <div className="shimmer-card" key={index} ></div>
                ))
            }
            
        </div>
    )
}

export default Shimmer 