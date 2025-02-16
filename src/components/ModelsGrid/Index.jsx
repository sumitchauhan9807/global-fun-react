import { useQuery } from "@apollo/client";
import { Link } from "react-router";
import { GET_ALL_MODELS } from "src/queries";

function Index() {
  const { loading, error, data } = useQuery(GET_ALL_MODELS);


  let allModels = data?.getAllModelsPublic
  if(!allModels) return
  console.log(allModels)
  return (
    <div className="category-vrModels collapsable expandable-multiple-categories-category multiple-categories-category segment-expanded-with-model-items-count-24 slidable">
    <div className="multiple-categories-category-header">
      <h2 className="segment-header text-title-l1 title-ds"><a href="/girls/vr">VR Cams</a></h2>
      <div className="multiple-categories-see-all"><a className="btn btn-inline-block btn-pale btn-small multiple-categories-see-all-btn" href="/girls/vr">See All</a><a className="multiple-categories-see-all-link" href="/girls/vr">See All</a></div>
    </div>
    <div className="multiple-categories-scroll-bar-wrapper">
      <div className="scroll-bar-container scroll-bar-container-in-segment">
        <div className="multiple-categories-models-list-wrapper multiple-categories-models-list-wrapper-in-segment">
          <section className="model-list model-list-slideable">
            {allModels.map((model,index)=>{
              return (
                <div key={index}  className="model-list-item">
                  <Link to={`/${model.username}`} className="model-list-item-link no-cover" id="model-list-item-138199186">
                  <img class="image-background" alt="KiraKayleigh1's Webcam Show" loading="lazy" src="https://img.strpst.com/thumbs/1738872180/135788304_webp"/>
                    <div className="model-list-item-upper">
                      <span className="ModelListItemBadge#c_ ModelListItemBadge__vr#eJ" /><span className="ModelListItemBadge#c_ ModelListItemBadge__toy#Gb" />
                      <div className="model-list-item-upper-right" />
                    </div>
                    <div className="model-list-item-lower"><span className="model-list-item-username model-list-item-username-short model-name">{model.username}</span><span className="country-flag country-flag--small model-list-item-country" style={{backgroundImage: 'url("https://assets.strpst.com/assets/common/components/ui/CountryFlag/images/co.svg")'}} /></div>
                  </Link>
                </div>
              )
            })}
          </section>
        </div>
      </div>
    </div>
    <div className="expandable-multiple-categories-segment-see-more see-more-models-button">
      <div className="see-more-divider" />
      <div className="see-more-button-background">
        <button className="btn ds-btn-default ds-btn-inline-block see-more-button" type="button">
          See More
          <svg className="IconV2__icon#YR see-more-icon">
            <use xlinkHref="#icons-chevron-down" />
          </svg>
        </button>
      </div>
      <div className="see-more-divider" />
    </div>
  </div>
  )
} 

export default Index