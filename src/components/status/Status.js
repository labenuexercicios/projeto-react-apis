import { NameTd, ProgressBar, ProgressBarTd, StatsTd, StatusBaseTable } from "./styled"

export default function Status({stats}) {
    return (
        <StatusBaseTable>
            <thead></thead>
            <tbody>
                {stats.map((state, index) => {
                    return (
                        <tr key={index} >
                            <NameTd>
                                {state.name}:
                            </NameTd>
                            <StatsTd>
                                {state.base_stat}
                            </StatsTd>
                            <ProgressBarTd>
                                <ProgressBar baseState={state.base_stat}></ProgressBar>
                            </ProgressBarTd>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr>
                    <NameTd>Total:</NameTd>
                    <StatsTd>
                        {stats.reduce((soma, state) => soma + state.base_stat, 0)}
                    </StatsTd>
                    <ProgressBarTd />
                </tr>
            </tfoot>

        </StatusBaseTable>
    )
}