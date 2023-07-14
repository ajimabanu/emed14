import React, { useEffect, useState } from 'react'
import '../styles/Sectionnotes.css'


const Sectionnotes = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (global.values && global.values.code && global.years) {
          const response = await fetch(`/codes/${global.values.code}/details/?version=${global.years}`);
          if (response.ok) {
            const data = await response.json();
            setResults(data);
          } else {
            console.error("Failed to fetch data");
          }
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBooks();
  }, [global.values.code]);



  console.log("our result is", results);
  return (
    <div className="section">

      <div >

        <table>
          
          <tbody className='chapter'>
            
        
              {results && results.section && results.section.notes ? (
  results.section.notes.map((note, index) => (
    <tr key={index}>
      <td>{note.notes}</td>
    </tr>
  ))
) : (
  <tr>
    <td>No Section notes</td>
  </tr>
)}

          </tbody>
          
        </table>
        {global.values.code === 'h548' ? (
        <table className='table1' cellSpacing={0}>

<tr>
  <td className='tablees' rowspan="2" >Category of visual impairment</td>
  <td className='tablees' colSpan="2">Visual acuity with best possible correction</td>
</tr>
<tr>
<td className='tablees'>maximum less than</td>
  <td className='tablees'>Minimum equal to or better than</td>
</tr>
<tr>
  <td className='tablees'>1</td>
  <td className='tablees'>6/18</td>
  <td className='tablees'>6/60 </td>
  </tr>
  <tr>
  <td className='tablees'>1</td>
  <td className='tablees'>3/10(0.3)</td>
  <td className='tablees'>1/10(0.1)</td>
  </tr>
  <tr>
  <td className='tablees'>1</td>
  <td className='tablees'>20/70</td>
  <td className='tablees'>20/200</td>
  </tr>
  <tr>
  <td className='tablees'>2</td>
  <td className='tablees'>6/60</td>
  <td className='tablees'>3/60 </td>
  </tr>
  <tr>
  <td className='tablees'>2</td>
  <td className='tablees'>1/10(0.1)</td>
  <td className='tablees'>1/20(0.05) </td>
  </tr>
  <tr>
  <td className='tablees'>2</td>
  <td className='tablees'>20/200</td>
  <td className='tablees'>20/400 </td>
  </tr>
  <tr>
  <td className='tablees'>3</td>
  <td className='tablees'>3/60</td>
  <td className='tablees'>1/60(finger counting at one meter) </td>
  </tr>
  <tr>
  <td className='tablees'>3</td>
  <td className='tablees'>1/20(0.05)</td>
  <td className='tablees'>1/50(0.02)</td>
  </tr>
  <tr>
  <td className='tablees'>3</td>
  <td className='tablees'>20/400</td>
  <td className='tablees'>5/300(20/1200) </td>
  

</tr>
<tr>
<td className='tablees'>4</td>
  <td className='tablees'>1/60(finger counting at one meter)</td>
  <td className='tablees'>light perception </td> 
</tr>
<tr>
  <td className='tablees'>4</td>
  <td className='tablees'>1/50(0.02)</td>
  <td className='tablees'>- </td>
  

</tr>
<tr>
  <td className='tablees'>4</td>
  <td className='tablees'>5/300</td>
  <td className='tablees'>-</td>
  

</tr>
<tr>
  <td className='tablees'>5</td>
  <td className='tablees'>no light perception</td>
  <td className='tablees'>-</td>
  

</tr>
<tr>
  <td className='tablees'>5</td>
  <td className='tablees'>-</td>
  <td className='tablees'>-</td>
  

</tr>
<tr>
  <td className='tablees'>5</td>
  <td className='tablees'>-</td>
  <td className='tablees'>-</td>
  

</tr>
<tr>
  <td className='tablees'>9</td>
  <td className='tablees'>undertermined or unspecified</td>
  <td className='tablees'>-</td>
  

</tr>
<tr>
  <td className='tablees'>9</td>
  <td className='tablees'>-</td>
  <td className='tablees'>-</td>
  

</tr>
<tr>
  <td className='tablees'>9</td>
  <td className='tablees'>-</td>
  <td className='tablees'>-</td>
  

</tr>
    
      </table>
       ) : null}
      </div>

    </div>
  )
}

export default Sectionnotes