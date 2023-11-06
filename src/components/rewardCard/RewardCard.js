import React from 'react'

const RewardCard = ({medalImg, position, reward, anim, anim_delay}) => {
  return (
    <>
        <div data-aos={anim} data-aos-delay={anim_delay} className='reward-card'>
            <img src={medalImg} alt="" />
            <div className="card-txt">
                <h2>{position}</h2>
                <h4>Runner</h4> 
                <h3>{reward}</h3>
            </div>
        </div>
    </>
  )
}

export default RewardCard