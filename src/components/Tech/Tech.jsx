import BallCanvas from '../canvas/ball'
import { technologies } from '../../constant/constant'
import './Tech.css'

const Tech = () => {
  return (
    <div className="balls">
      {technologies.map((technology) => (
        <div className="ball" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default Tech