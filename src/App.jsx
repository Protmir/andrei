import { useState } from 'react';
import { FaBurger } from 'react-icons/fa6';
import { IoDiamond } from 'react-icons/io5';
import { BiSolidWine } from 'react-icons/bi';
import './App.css';

function App() {
  const [wineGlasses, setWineGlasses] = useState(0);

  const projectsAchievements = [
    {
      icon: <FaBurger className="projectIcon" />,
      title: 'Бургер Кинг',
      text: 'Где даже кетчуп — это state, а комбо-сеты — это props',
    },
    {
      icon: <IoDiamond className="projectIcon" />,
      title: 'Ювелирный магазин',
      text: 'Refactoring до блеска 585 пробы (компоненты как бриллианты!)',
    },
    {
      icon: <BiSolidWine className="projectIcon" />,
      title: 'Wine & Spirits',
      text: 'Реализовал DRY-подход (и не только в коде 🍷)',
    },
  ];

  return (
    <div className="container">
      <h1 className="header">
        🎂 С ДР, фронтенд-маэстро!
        <span className="versionBadge">v24.0.0</span>
      </h1>

      <ul className="projectList">
        {projectsAchievements.map((project, index) => (
          <li key={index} className="projectItem">
            {project.icon}
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </li>
        ))}
      </ul>

      <div>
        <button
          className="wineButton"
          onClick={() => setWineGlasses((prev) => prev + 1)}
        >
          Налей виртуального вина: {wineGlasses} 🍷
        </button>
        {wineGlasses > 3 && (
          <p className="warning">Внимание: превышена дневная норма хуков!</p>
        )}
      </div>

      <footer className="footer">
        <ul className="footerList">
          <li>🚀 Баги бегут от тебя, как клиенты Бургер Кинга</li>
          <li>💎 Зарплата растёт, как каратность твоих компонентов</li>
          <li>🍷 Код льётся, как вино из админки Wine & Spirits</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
