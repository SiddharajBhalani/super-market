export const CategoryHeading = (props) => {
    const { category, img } = props;
    return (
        <div className="flex justify-between align-center">
            <div style={{
                flex: 1,
                background: 'rgb(30 64 175)',
                margin: '30px 30px 30px 0',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center'
            }} className="flex1">
                <p style={{
                    color: 'white',
                    fontSize: 35,
                    fontWeight: 600
                }}>{category}</p>
            </div>
            <img src={img} alt={category} />
        </div>
    )
}