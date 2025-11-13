import { FacebookLogoIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

/**
 * Componente Footer
 * Exibe o rodapé com o ano atual e ícones das redes sociais.
 *
 * @returns {JSX.Element} Rodapé estilizado com links e ícones.
 */

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog Pessoal Generation | Copyright: {data}
          </p>

          <p className="text-lg mt-2">Acesse nossas redes sociais</p>

          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/milenasoliv/" target="blank">
            <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://github.com/misoliv" target="blank">
            <GithubLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
