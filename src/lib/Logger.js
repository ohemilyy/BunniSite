import chalk from 'chalk';
class Logger {

    /**
     * Logs consistently to the Reactbreeze system.
     * @param {*} message A string or formattable object to output
     * @return {void} Console output
     */
    static log(message) {
        console.log(`${chalk["bold"].green('[Reactbreeze]')} ${chalk.red(`${new Date().toUTCString()}`)} ${message}`);
    };
};

export default Logger;