import { Component, OnInit } from '@angular/core';

//importando os dados para poder gerar nos gráficos
import { DadosService } from './dados.service';

//Precisa declarar a variavel "google" no angular desse jeito para ela ser reconhecida globalmente e ser usada
declare var google: any 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  //precisamos armazenar esses dados em algum local
  //sera armazenado nesse "dados" privado que só sera acessado aqui
  private dados: any

  //Inserindo o "dados service" no constructor no atrib privado criado "dadosService"
  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados 
        this.init()
      }
    )
  }

  //Inicializa a API de gráficos com delay de 1 segundo, o que permite a integração da API com o Angular
  init():void {
    if(typeof(google) !== 'undefined') {
      //aqui chama os pacotes dos graficos do google
      google.charts.load('current', {'packages': ['corechart']})
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos())
      }, 1000)
    }
  }

  //Método chamado assim que a API de gráficos e inicializada.
  //Responsável por chamar os métodos geradores dos gráficos
  exibirGraficos(): void {
    this.exibirPieChart()
    this.exibir3dPieChart()
    this.exibirBarChart()
    this.exibirLineChart()
    this.exibirColumnChart()
    this.exibirDonutChart()
  }

  //Exibe o gráfico Pie Chart
  exibirPieChart(): void {
    //referencia ela no html pelo seletor "pie_chart"
    const el = document.getElementById('pie_chart')
    //aqui instancia o grafico "PieChart" passando a div onde ele sera exibido "el"
    const chart = new google.visualization.PieChart(el)
    
    //comando que ira desenhar o gráfico
    chart.draw(this.obterDataTable(), this.obterOpcoes())
  }

  exibir3dPieChart(): void {
    const el = document.getElementById('3d_pie_chart')
    const chart = new google.visualization.PieChart(el)
    const opcoes = this.obterOpcoes()

    //Use este codigo para o PieChart ficar em 3D
    opcoes['is3D'] = true 
    chart.draw(this.obterDataTable(), opcoes)
  }

  exibirBarChart(): void {
    const el = document.getElementById('bar_chart')
    const chart = new google.visualization.BarChart(el)

    chart.draw(this.obterDataTable(), this.obterOpcoes())
  }

  exibirLineChart(): void {
    const el = document.getElementById('line_chart')
    const chart = new google.visualization.LineChart(el)

    chart.draw(this.obterDataTable(), this.obterOpcoes())
  }

  exibirColumnChart(): void {
    const el = document.getElementById('column_chart')
    const chart = new google.visualization.ColumnChart(el)

    chart.draw(this.obterDataTable(), this.obterOpcoes())
  }

  exibirDonutChart(): void {
    const el = document.getElementById('donut_chart')
    const chart = new google.visualization.PieChart(el)
    const opcoes = this.obterOpcoes()

    //Opão especial para definir o tamanho do buraco central do Donut
    opcoes['pieHole'] = 0.4
    chart.draw(this.obterDataTable(), opcoes)
  }

  //Cria e retorna o objeto DataTable da API de gráficos, responsável por definir os dados do gráfico
  obterDataTable(): any {
    const data = new google.visualization.DataTable()

    //add as colunas do grafico e linha
    data.addColumn('string', 'Mês')
    data.addColumn('number', 'Quantidade')
    data.addRows(this.dados)

    return data 
  }

  //Retorna as opções do gráfico, que incluem o título e tamanho do gráfico
  obterOpcoes(): any {
    return {
      'title': 'Quantidade de cadastros primeiro semestre',
      'width': 400,
      'height': 300
    }
  }

}
