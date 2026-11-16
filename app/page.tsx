import Link from "next/link";
import { ArrowRight, ArrowUpRight, Binary, Braces, ChartNoAxesColumn, FileSearch, GitBranch, Languages, Network, ScanText, Sparkles, TextSearch, Workflow, BookOpen, BrainCircuit } from "lucide-react";
import { Header } from "@/components/header";
import { Brand } from "@/components/brand";

const topics = [
  { icon: FileSearch, title: "Introdução à Mineração", desc: "Entenda como extrair padrões e conhecimento de coleções de textos." },
  { icon: ScanText, title: "Pré-processamento", desc: "Prepare os dados textuais para análises mais consistentes." },
  { icon: Braces, title: "Tokenização e normalização", desc: "Explore a divisão e a padronização de palavras e sentenças." },
  { icon: TextSearch, title: "Remoção de stopwords", desc: "Identifique termos frequentes que pouco acrescentam à análise." },
  { icon: GitBranch, title: "Stemming e lematização", desc: "Conheça formas de reduzir palavras às suas representações-base." },
  { icon: ChartNoAxesColumn, title: "Frequência de palavras", desc: "Investigue ocorrências, distribuição e relevância de termos." },
  { icon: Sparkles, title: "Análise de sentimentos", desc: "Compreenda abordagens para identificar opiniões em textos." },
  { icon: Languages, title: "Processamento de linguagem", desc: "Conheça conceitos e tarefas fundamentais de PLN." },
  { icon: Network, title: "Representação vetorial", desc: "Veja como textos podem ser representados numericamente." },
  { icon: Workflow, title: "Aplicações práticas", desc: "Relacione técnicas de análise textual a problemas reais." }
];

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow"><span className="status-dot" /> Conhecimento a partir de dados textuais</span>
            <h1>Explore o universo da <span className="gradient-text">Mineração de Texto</span> e do PLN.</h1>
            <p className="hero-copy">Aprenda como transformar grandes volumes de dados textuais em conhecimento, utilizando técnicas de análise, processamento de linguagem natural e inteligência artificial.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/login">Começar a aprender <ArrowRight size={15}/></Link>
              <a className="btn btn-secondary" href="#sobre">Conhecer o projeto</a>
            </div>
            <div className="hero-note"><BookOpen size={14}/> Uma jornada de conceitos fundamentais a aplicações práticas.</div>
          </div>
          <div className="visual-card" aria-label="Ilustração conceitual de análise e processamento de texto">
            <div className="visual-top"><span><span className="status-dot"/> TEXT ANALYTICS / OVERVIEW</span><span>01 — 04</span></div>
            <div className="code-window">
              <div className="code-label">PROCESSAMENTO DE TEXTO · EXEMPLO CONCEITUAL</div>
              <div className="code-line"><span className="blue">entrada</span> = <span className="accent">"dados geram conhecimento"</span></div>
              <div className="code-line"><span className="blue">tokens</span> = tokenizar(entrada)</div>
              <div className="code-line"><span className="blue">termos</span> = normalizar(tokens)</div>
              <div className="code-line"><span className="blue">padrões</span> = analisar(termos)</div>
              <div className="code-line"><span className="accent">→</span> informação estruturada</div>
            </div>
            <div className="mini-stats">
              <div className="mini-stat"><strong>01</strong><span>Texto bruto</span></div>
              <div className="mini-stat"><strong>02</strong><span>Processamento</span></div>
              <div className="mini-stat"><strong>03</strong><span>Conhecimento</span></div>
            </div>
            <div className="orbit"><BrainCircuit size={34}/></div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="sobre">
        <div className="container about-grid">
          <div>
            <span className="kicker">Sobre o projeto</span>
            <h2>Do texto à descoberta: compreenda o que os dados dizem.</h2>
            <p className="about-copy">A plataforma foi desenvolvida com o propósito de facilitar o aprendizado sobre Mineração de Texto e Processamento de Linguagem Natural, apresentando conceitos fundamentais, técnicas de análise e aplicações práticas utilizadas na transformação de informações textuais em conhecimento.</p>
            <p className="about-copy">A proposta é aproximar os fundamentos teóricos de situações reais, organizando o aprendizado em etapas claras e progressivas.</p>
          </div>
          <div className="about-panel">
            <h3><Binary size={18} style={{display:"inline",color:"var(--cyan)",verticalAlign:"middle",marginRight:9}}/> Aprender fazendo conexões</h3>
            <p>Textos estão presentes em avaliações, notícias, pesquisas, redes sociais e documentos. Com as técnicas certas, é possível organizar esse conteúdo, identificar padrões e apoiar decisões baseadas em informação.</p>
          </div>
        </div>
      </section>

      <section className="section" id="conteudos">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Trilha de aprendizagem</span>
            <h2>O que você vai aprender?</h2>
            <p>Uma visão dos principais assuntos que compõem o universo da mineração de texto e do processamento de linguagem natural. Os conteúdos serão disponibilizados progressivamente.</p>
          </div>
          <div className="topic-grid">
            {topics.map(({icon: Icon,title,desc}) => <article className="topic-card" key={title}>
              <div className="topic-icon"><Icon size={18}/></div><h3>{title}</h3><p>{desc}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="metodo">
        <div className="container">
          <div className="section-head">
            <span className="kicker">Caminho de aprendizagem</span>
            <h2>Conhecimento construído em etapas.</h2>
            <p>Uma sequência didática para conectar fundamentos, técnicas e aplicação.</p>
          </div>
          <div className="steps">
            {[
              ["01","Aprenda os conceitos","Construa uma base para compreender os dados textuais."],
              ["02","Conheça as técnicas","Entenda os métodos utilizados no processamento."],
              ["03","Explore exemplos","Observe como as técnicas se comportam em diferentes textos."],
              ["04","Aplique os conhecimentos","Conecte o aprendizado a problemas e cenários reais."]
            ].map(([num,title,desc]) => <article className="step" key={num}><span className="step-num">{num} / ETAPA</span><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div><span className="kicker">Sua jornada começa aqui</span><h2>Pronto para explorar os dados por trás das palavras?</h2><p>Acesse a plataforma e acompanhe a evolução dos conteúdos educacionais.</p></div>
            <Link className="btn btn-primary" href="/login">Acessar plataforma <ArrowUpRight size={15}/></Link>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="container footer-inner">
        <div><Brand/><p style={{margin:"9px 0 0"}}>Uma plataforma educacional sobre Mineração de Texto e PLN.</p></div>
        <div className="footer-links"><a href="#sobre">Projeto</a><a href="#conteudos">Conteúdos</a><Link href="/login">Entrar</Link></div>
        <span>© {new Date().getFullYear()} TextoLab. Projeto acadêmico.</span>
      </div>
    </footer>
  </>;
}
