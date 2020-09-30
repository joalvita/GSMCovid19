import React from 'react'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

import styled from 'styled-components'

const CTALink = styled(Link)`
  &:hover i {
    padding-left: 20px;
  }
  & i {
    padding-left: 5px;
    transition: all 0.5s ease;
  }
  background-color: rgb(0, 74, 147) !important;
  border-color: rgb(0, 74, 147) !important;
`

const Paragraph = styled.p`
  color: #4F5763;
`
const Fondo = styled.main`
  background-color: rgb(109, 210, 175);
`

const ListItem = styled.li`
  color: #4F5763;
`

const Home = () => {
  const { t } = useTranslation('home')

  return (
    
      <main  className="fdb-block sep-border" 
      style={{
        backgroundColor: 'rgb(109, 210, 175)'
      }}
      tabIndex="-1"  >

        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <h2>{t('leadTitle')}</h2>
              <Paragraph>{t('leadSecondary')}</Paragraph>
              <ul style={{ color: '#8892a0' }}>
                <ListItem>{t('listFirst')}</ListItem>
                <ListItem>
                  <Trans i18nKey="home:listSecond">
                    Mirá los datos estadísticos que ya juntamos&nbsp;
                  <Link to="/stats" aria-label={t('stats')}>aquí</Link>.
                </Trans>
                </ListItem>
              </ul>
              <Paragraph className="mt-4">
                <CTALink className="btn btn-secondary" to="/report">
                  {t('ctaCheckSymptoms')}
                  <i className="fas fa-arrow-right ml-1"></i>
                </CTALink>
              </Paragraph>
            </div>
            <div className="col-12 col-md-8 col-lg-6 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0 d-lg-block d-none">
              <img alt="" className="img-fluid" src="https://cdn.www.gob.pe/uploads/campaign/photo/000/000/699/campaign_protegete-de-la-covid-19.png" />
            </div>
          </div>
        </div>

      </main>
    
  )
}

export default Home
