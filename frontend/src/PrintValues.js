import styles from "./ApiData.module.css"

function PrintValues({values}){
    return (
        <div>
      {values.map((item, index) => (
        <p key={index} className={styles.text}>{item}</p>
      ))}
    </div>
    )
}

export default PrintValues