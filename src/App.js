import logo from './logo.svg';
import './App.css';

// 사용자정의태그 - 컾포넌트[Component]
function Header(props) {
  // console.log('props', props, props.title);
  return <header>
  <h1><a href="/">{props.title}</a></h1>
</header>
}

function Nav(props) {
  // const lis = [
  //   <li><a href="/read/1">html</a></li>,
  //   <li><a href="/read/2">css</a></li>,
  //   <li><a href="/read/3">js</a></li>
  // ]
  const lis =[]
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  )
}

function Article(props) {
  // console.log ('props', props, props.title, props.body);
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}


function App() {
  const topics =  [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'js is...'}
  ]
  return (
    <div>
      <Header title="WEB"></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
