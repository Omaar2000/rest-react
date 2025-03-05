import { Card } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const CountryCard = ({ country }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Card
      onClick={() => navigate(`/${country.cca3}`)}
      hoverable
      cover={<img alt="example" src={country.flags.png} className="h-40" />}
      className="shadow-md"
    >
      <Card.Meta
        title={<span className="font-[700]"> {country.name.official}</span>}
      />
      <p className="mt-4">
        <span>
          <strong>{t("POPULATION")}</strong>
        </span>
        <span> {country.population}</span>
      </p>
      <p className="mt-1">
        <span>
          <strong>{t("REGION")}</strong>
        </span>
        <span>{country.region}</span>
      </p>
      <p className="mt-1">
        <span>
          <strong>{t("CAPITAL")}</strong>
        </span>
        <span>{country.capital}</span>
      </p>
    </Card>
  );
};

export default CountryCard;
