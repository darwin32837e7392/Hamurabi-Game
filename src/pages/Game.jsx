import React from 'react'
import { evaluate } from 'mathjs'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 1,
            starved: 0,
            peopleImmigrated: 5,
            population: 100,
            acres: 1000,
            harvested: 3,
            rats: 200,
            bushelsInStore: 2800,
            landCost: 17,
            acresMarket: 0,
            bushelsFed: 0,
            seedsPlanted: 0,
            bushelsRemaining: 2800,
            acresRemaining: 1000
        };
        this.gameLoop = this.gameLoop.bind(this);
        this.calculateScore = this.calculateScore.bind(this);
        this.getRandom = this.getRandom.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { acresMarket, bushelsFed, seedsPlanted, acresRemaining, landCost, bushelsRemaining, bushelsInStore } = this.state;
        if (acresMarket !== prevState.acresMarket && acresMarket !== 0 && acresMarket !== '') {
            // check if player is selling more land than they own or buying more than they can afford
            if (0 <= evaluate(`${acresMarket} + ${acresRemaining}`) && 0 <= this.calculateBushelsRemaining(acresMarket, bushelsFed, seedsPlanted)) {
                this.setState({
                    bushelsRemaining: this.calculateBushelsRemaining(acresMarket, bushelsFed, seedsPlanted)
                });
            } else {
                // Set acres to 0 if the player breaks the rules
                this.setState({
                    acresMarket: 0,
                    bushelsRemaining: this.calculateBushelsRemaining(0, bushelsFed, seedsPlanted)
                })
            }
        } else if (bushelsFed !== prevProps.bushelsFed && bushelsFed !== '' && acresMarket !== '') {
            if(0 <= this.calculateBushelsRemaining(acresMarket, bushelsFed, seedsPlanted)) {
                
            } else {

            }
        } else if (seedsPlanted !== prevProps.seedsPlanted && seedsPlanted !== '' && bushelsFed !== '' && acresMarket !== '') {

        }
    }

    calculateBushelsRemaining(acresMarket, bushelsFed, seedsPlanted) {
        const { landCost, bushelsInStore } = this.state;
        return evaluate(`${bushelsInStore} - (${acresMarket} * ${landCost}) - ${bushelsFed} - ${seedsPlanted}`)
    }

    gameLoop() {
        const { acres, year, population, starved, bushelsFed } = this.state;
        let populationFed = bushelsFed / 20;
        let newPopulation;
        // check if everyone was fed
        if (populationFed >= population) {
            newPopulation = population;
        } else {
            // if everyone wasn't fed update population with new value
            newPopulation = populationFed;
        }
        if (newPopulation <= 0) {
            this.calculateScore(false);
        } else if (year === 10) {
            this.calculateScore(true);
        } else {

            this.setState({
                year: year + 1,
                starved: 0
            });
        }
    }

    calculateScore(didPlayerWin) {
        if (didPlayerWin) {

        } else {

        }
    }

    getRandom(max) {
        return Math.ceiling(Math.random() * max);
    }

    render() {
        const { year, starved, peopleImmigrated, population, acres, harvested, rats, bushelsInStore, landCost, acresMarket,
        bushelsFed, seedsPlanted, bushelsRemaining, acresRemaining } = this.state;
        return (
            <div className='game'>
                <h1>Hammurabi I beg to report to you,</h1>
                <h2>in Year {year}, {starved} people starved.</h2>
                <h2>{peopleImmigrated} people came to the city.</h2>
                <h2>The city population is now {population}.</h2>
                <h2>The city now owns {acres} acres.</h2>
                <h2>You harvested {harvested} bushels per acre.</h2>
                <h2>Rats ate {rats} bushels.</h2>
                <h2>You now have {bushelsInStore} bushels in store.</h2>
                <h2>Land is trading at {landCost} bushels per acre.</h2>
                <h2>{bushelsRemaining} bushels remaining.</h2>
                <h2>{acresRemaining} acres remaining.</h2>
                <input type='number' value={acresMarket} onChange={event => this.setState({ acresMarket: event.target.value})}/>
                <input type='number' value={bushelsFed} onChange={event => this.setState({ bushelsFed: event.target.value})}/>
                <input type='number' value={seedsPlanted} onChange={event => this.setState({ seedsPlanted: event.target.value})}/>
                <button onClick={() => this.gameLoop()}>Make It So!</button>
            </div>
        )
    }
}

export default Game