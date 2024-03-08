import React from 'react'

export default function Form({ handleSubmit, value, setValue, money, setMoney }) {
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        color: '#E2AA5F',
        fontSize: '15px',
        margin: '10px',
        border: 'none',
        borderBottom: '1px solid #E2AA5F'
    }

    const formStyle = {
        flex: '10', 
        margin: '10px 0px',
        border: 'none',
        borderBottom: 'none'
    }

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    }

    const handleChangeMoney = (e) => {
        setMoney(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex' }}>
                <div style={divStyle}>
                    <div >지출 항목</div>
                    <input 
                        type="text"
                        name="value"
                        style={formStyle}
                        placeholder="예) 렌트비"
                        value={value}
                        onChange={handleChangeValue}
                    />
                </div>
                <div style={divStyle}>
                    <div>비용</div>
                    <input 
                        type="number"
                        name="money"
                        style={formStyle}
                        value={money}
                        onChange={handleChangeMoney}
                    />
                </div>
            </div>
            <input
                type="submit"
                value="입력"
                className="btn"
                style={{ flex: '1'}}
            />
            </form>
    );
}
