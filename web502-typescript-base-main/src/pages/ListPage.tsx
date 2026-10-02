import { useEffect, useState } from "react";
import axios from "axios";

interface pitches {
    id: string;
    name: string;
    price: number;
    location: string;
    type: string;
  }
function ListPage() {
  const [pitchess, setPitchess] = useState<pitches[]>([])
  const [search,setSearch] = useState("")
  const [selectType,setSelectType] = useState("Tất cả")
  function getPitchess() {
    axios.get(`http://localhost:3000/pitches`).then((res)=>{
      console.log(res.data);
      setPitchess(res.data)
    });
  }
  useEffect(()=>{
    getPitchess();
  },[]);
  function deletePitchess(id:string) {
    if(window.confirm("bạn có chắc chắn muốn xóa?")) {
    axios.delete(`http://localhost:3000/pitches/${id}`).then((res)=>{
      getPitchess();
    });
    }
  }
  function searchPitchess(name: string) {
    axios.get(`http://localhost:3000/pitches?name_like=${name}`).then((res)=>{
      console.log(res.data);
      setPitchess(res.data)
    });
  }
  function filterType(type:string){
    setSelectType(type);
    if(type === "Tất cả") {
      getPitchess();
    }else {
      axios.get(`http://localhost:3000/pitches?type=${type}`).then((res)=>{
        console.log(res.data);
        setPitchess(res.data)
      });
    }
  }
  return (
    <div className="p-6">
      <div className="mb-6 flex gap-4">
      <form className="mb-6 flex gap-4" onSubmit={(e) => {e.preventDefault(); searchPitchess(search)}}>
        <input type="text" value={search} placeholder="Nhập....." onChange={(e)=> setSearch(e.target.value)}/>
        <button className="border" type="submit">Tìm kiếm</button>
      </form>
      <select name="" id="" value={selectType} onChange={(e)=> filterType(e.target.value)}>
        <option value="Tất cả">Tất cả loại sân</option>
        <option value="Sân 5">Sân 5</option>
        <option value="Sân 7">Sân 7</option>
      </select>
      </div>
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Price
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Location
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Type
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Giá thuê 2 giờ
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {pitchess.map((item)=>{
              return(

            <tr key={item.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border border-gray-300">{item.id}</td>
              <td className="px-4 py-2 border border-gray-300">{item.name}</td>
              <td className="px-4 py-2 border border-gray-300">{item.price}</td>
              <td className="px-4 py-2 border border-gray-300">{item.location}</td>
              <td className="px-4 py-2 border border-gray-300">{item.type}</td>
              <td className="px-4 py-2 border border-gray-300">{item.price*2}</td>
              <td className="px-4 py-2 border border-gray-300">
                <button className="border" onClick={()=> deletePitchess(item.id)}>Delete</button>
              </td>
            </tr>
             );  
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
