import { Container } from "./styles";

export function TransactionsTable(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$ 5.000,00</td>
                        <td>Venda</td>
                        <td>12/10/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ 2000,00</td>
                        <td>Casa</td>
                        <td>04/10/2021</td>
                    </tr>
                    <tr>
                        <td>Computador</td>
                        <td className="deposit">R$ 3.000,00</td>
                        <td>Venda</td>
                        <td>01/10/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}