import './globals.css';
import FeaturePost from './components/feature-post';

interface ChildProps {
  topic: string;
}

const Home: React.FC<ChildProps> = ({ topic }) => {
  return (
    <>
    <main className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary ">
              <FeaturePost topic={topic}/>
            </div>
          
        
      </main>
    </>
  );
}

export default Home;
