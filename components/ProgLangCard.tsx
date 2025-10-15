const proLangs = [
  {
    name: "HTML",
    description: "it's an Structuer language",
    ability: "90",
    IDK: "Canva",
  },
  {
    name: "CSS",
    description: "it's an Style language",
    ability: "85",
    IDK: "Grid",
  },
  {
    name: "Javascript",
    description: "it's an Dynamic language and actions",
    ability: "70",
    IDK: "Async, AJAX, JSON",
  },
  {
    name: "React",
    description: "it's an Framwork JS",
    ability: "40",
    IDK: "Hooks,",
  },
  {
    name: "Next.js",
    description: "it's an Liberary React",
    ability: "85",
    IDK: "SSR",
  },
  {
    name: "Bootstrap",
    description: "it's an Framwork CSS",
    ability: "100",
    IDK: "",
  },
  {
    name: "Tailwind with Shad.cn",
    description: "it's UI styling framework",
    ability: "60",
    IDK: "tailwind classes",
  },
  {
    name: "SASS & SCSS",
    description: "it's an Style",
    ability: "20",
    IDK: "Nesting, Mixins",
  },
  {
    name: "JQuery",
    description: "it's an Structuer language",
    ability: "80",
    IDK: "",
  },
  {
    name: "Node.js",
    description: "it's Back-end JS",
    ability: "20",
    IDK: "alots",
  },
  {
    name: "Java",
    description: "it's an Structuer language",
    ability: "15",
    IDK: "",
  },
  {
    name: "Python",
    description: "it's an Structuer language",
    ability: "10",
    IDK: "",
  },
  {
    name: "C++",
    description: "it's an Structuer language",
    ability: "15",
    IDK: "",
  },
  {
    name: "Flutter & Dart",
    description: "it's an Structuer language",
    ability: "65",
    IDK: "Data",
  },
];

const ProgLangCard: React.FC = () => {
  return (
    <div className="d-flex flex-row justify-content-evenly align-self-center align-content-around flex-wrap" id="progLang">
      {proLangs.map((proLang, index) => (
        <div className="card m-4" style={{ width: "19rem" }} key={`proLang-container-${index}`}>
          <div className="card-body" key={`pro-lang-${index}`}>
            <h5 className="card-title text-center fw-bold fs-3 pb-3">{proLang.name}</h5>
            <p className="card-text fs-5">{proLang.description}</p>
            <div className="progress-stacked">
              <div
                className="progress"
                role="progressbar"
                aria-label={`Progress for ${proLang.name}: ${proLang.ability}%`}
                aria-valuenow={proLang.ability}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${Number(proLang.ability)}%` }}
              >
                <div className="progress-bar bg-success progress-bar-striped progress-bar-animated">{proLang.ability}%</div>
              </div>
              <div
                className="progress"
                role="progressbar"
                aria-label={`Remaining progress for ${proLang.name}: ${100 - parseInt(proLang.ability)}%`}
                aria-valuenow={String(100 - parseInt(proLang.ability))}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${100 - Number(proLang.ability)}%` }}
              >
                <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated">{100 - Number(proLang.ability)}%</div>
              </div>
            </div>
            <p className="card-text fs-5"><b>IDK: </b>{proLang.IDK}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgLangCard;
