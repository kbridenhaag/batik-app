import { Image } from "blitz"

export const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-third">
            <div className="app-footer__logo">
              <div className="app-footer__logo-img">
                <Image
                  alt=""
                  objectFit="contain"
                  layout="fill"
                  src="/assets/images/kbridenhaag-logo.png"
                  aria-hidden="true"
                  className="app-footer__logo-img"
                />
              </div>
              <span className="app-footer__logotype">
                <span className="govuk-!-font-weight-bold">
                  The Embassy of <br aria-hidden="true" />
                  The Republic of Indonesia <br aria-hidden="true" />
                </span>
                The Hague
              </span>
            </div>
          </div>
          <div className="govuk-grid-column-two-thirds">
            <span></span>
            &copy; Copyright Indonesia.nl 2022
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
