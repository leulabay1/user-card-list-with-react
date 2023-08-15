import ProfileCard from './components/profile_card';
import './App.css';

function App() {
  //a list of objects populated with user's information
  var profileCards = [{imagepath: "https://i.imgur.com/MK3eW3Am.jpg", name: "Abebe Bekele", bio: "dadicated software engineer", phonenumber: "0912234245"},{imagepath: "https://tse3.mm.bing.net/th?id=OIP._sxQhqpJFWg1ViILL_WaAQHaLk&pid=Api&P=0&h=180", name: "Yohaness desta", bio: "making things better everytime I warn them", phonenumber: "0911344573"}, {imagepath: "https://tse2.mm.bing.net/th?id=OIP.Gvpu-V0uUo4MimsxIIXXEQHaFj&pid=Api&P=0&h=180", name: "Semahegn Belew", phonenumber: "0912234245"}]
  
  //maping each user information to an html list items using the profileCard
  const listItems = profileCards.map((user)=>{
    return <li key={user.name}>
      <ProfileCard name={user.name} phonenumber={user.phonenumber} bio={user.bio} imagepath={user.imagepath}></ProfileCard>
    </li>
  });

  return (
    <div className="App">
      <ul>
      {listItems}
      </ul> 
    </div>
  );
}

export default App;
