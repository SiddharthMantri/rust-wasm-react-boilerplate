import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import webpackConfig from "../config/webpack.development.config";

const runDevelopment = async () => {
  const compiler = webpack(webpackConfig);
  const devServerOptions = { ...webpackConfig.devServer, open: true };
  const server = new webpackDevServer(devServerOptions, compiler);

  await server.start();
};

runDevelopment();
