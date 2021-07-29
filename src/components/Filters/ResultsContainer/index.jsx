import * as Atoms from '../../../utils/style/Atoms'

function ResultsContainer({ data, matchFunction }) {
    return (
        <Atoms.ListContainer>
            {data.map((element) => matchFunction(element))}
        </Atoms.ListContainer>
    )
}

export default ResultsContainer
