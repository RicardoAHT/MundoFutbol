import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'
import TeamCard from './TeamCard'

const Teams = () => {

    const apiKey = "49411caa941ba45b9364b4167077bfc65442a7216d3363c52ace8c8a7c267950"
    const teamId = useSelector(store => store.team)
    const teamsUrl =`https://apiv3.apifootball.com/?action=get_teams&league_id=${302}&APIkey=${apiKey}`
    const [teams, getTeam, hasError] = useFetch(teamsUrl)
    
    useEffect(() => {
      getTeam()
    }, [teamId])
    console.log(teams)
  return (
    <section>
      <h3>teamId {teamId}</h3>
      <article>
        {
            teams?.map(team => (
                <TeamCard
                    key={team.team_key}
                    team={team}
                />
            ))
        }
      </article>
    </section>
  )
}

export default Teams
