import { useState } from 'react';
import styles from './app.module.css'
let data = ['Product Id', 'Subcategory', 'Title', 'Price', 'Popularity', 'Description', 'Rating', 'UTM Source', 'UTM Medium']
function App() {
  const [type, setType] = useState('CSV');
  const [encoding, setEncoding] = useState('UTF-8');
  const [delimeter, setDelimeter] = useState('comma');
  const [hasHeader, setHasHeader] = useState(false);
  const [step3, setStep3] = useState(false);
  const [left, setLeft] = useState(data);
  const [right, setRight] = useState([]);
  const [leftSelected, setLeftSelected] = useState();
  const [rightSelected, setRightSelected] = useState();
  function forword() {
    if (leftSelected) {
      let temp = left.filter(data => data != leftSelected);
      setLeft(temp);
      setRight([...right, leftSelected]);
      setLeftSelected(null)

    }
  }
  function backword() {
    if (rightSelected) {
      let temp = right.filter(data => data != rightSelected);
      setRight(temp);
      setLeft([...left, rightSelected]);
      setRightSelected(null)
    }
  }
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Import Products</h1>
        </div>
        <div className={styles.topPart}>
          <div className={styles.left}>
            <div className={styles.leftcol1}>
              Step 1:
            </div>
            <div className={styles.leftcol2}>
              <div style={{ fontSize: 'large' }}>
                Select File
              </div>
              <div>
                <input type="file" accept=".csv,.json" />
              </div>
              <div>
                <span>Supported File Type(s) : CSV, JSON</span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rightcol1}>
              Step 2:
            </div>
            <div className={styles.rightcol2}>
              <div style={{ fontSize: 'large' }}>
                Specify Format
              </div>
              <div>
                <span> File Type</span>
                <select onChange={(e) => setType(e.target.value)} name="filetype" id="type">
                  <option value="CSV">CSV</option>
                  <option value="JSON">JSON</option>
                </select>
              </div>
              <div>
                <span> Character Encoding</span>
                <select onChange={(e) => setEncoding(e.target.value)} name="encoding" id="encoding">
                  <option value="UTF-8">UTF-8</option>
                </select>
              </div>
              <div>
                <span>Delimiter</span>
                <select onChange={(e) => setDelimeter(e.target.value)} name="delimeter" id="delimeter">
                  <option value="comma">comma</option>
                </select>
              </div>
              <div>
                <span>Has Header</span>
                <input type='checkbox' />
              </div>

            </div>
          </div>
        </div>
        <div className={styles.bottomPart}>
          <div className={styles.bottomPart1}>
            <div>
              <input onClick={() => { setStep3(!step3); console.log(step3) }} type="checkbox" /><span>Step 3</span>
            </div>
          </div>
          <div className={styles.bottomPart2}>
            <div style={{ fontSize: 'large' }}>
              Display Handling
            </div>
            <div style={{ fontSize: 'large' }}>
              Select the fields to be displayed
            </div>
            <div>
              <span style={{ width: 250 }}>Available Fields </span>
              <span>Fields to be Displayed</span>
            </div>
            <div>
              <div className={styles.leftOption}>
                {left?.map((data, index) => <span
                  key={index}
                  onClick={() => setLeftSelected(data)}
                  style={data == leftSelected ? { backgroundColor: "silver" } : {}} >{data}</span>)}
              </div>
              <div className={styles.centerControl}>
                <button onClick={() => forword()} ><img alt="forword" width={30} height={30} src='./forword.png' /></button>
                <button onClick={() => backword()}><img alt="backword" width={30} height={30} src='./backword.png' /></button>
              </div>
              <div className={styles.rightOption}>
                {right?.map((data, index) => <span
                  key={index}
                  onClick={() => setRightSelected(data)}
                  style={data == rightSelected ? { backgroundColor: "silver" } : {}} >{data}</span>)}
              </div>
            </div>
          </div>

        </div>
        <div className={styles.control}>
          <div><button style={{ backgroundColor: '#f2f2f2', color: 'red' }} id="cancel">Cancel</button></div>
          <div><button id="next">Next</button></div>

        </div>
      </div>
    </div>
  );
}

export default App;
