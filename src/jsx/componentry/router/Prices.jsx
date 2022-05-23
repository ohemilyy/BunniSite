import "../../css/contact.css";
import { Zoom } from "react-awesome-reveal";
import "../../css/Experience.css";
import { faJsSquare, faPython, faJava, faKorvue, faRedhat } from "@fortawesome/free-brands-svg-icons";
import GenericFasIcon from "../GenericFasIcon";


export default function Prices() {
    <Zoom>
        <div className="flex gap-y-6 flex-col py-12 h-screen items-center bg-gray-900 text-center">
            <div className="Skills-Section">
                <h1 className="Title">Prices</h1>
                <h2 className="Subtitle">My prices vary on what you need so here is a table below.</h2>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Service</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Website Development</td>
                            <td>$500</td>
                        </tr>
                        <tr>
                            <td>Website Maintenance</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>Website Redesign</td>
                            <td>$500</td>
                        </tr>
                        <tr>    
                            <td>Website Redesign (with new domain)</td>
                            <td>$1000</td>
                        </tr>
                        <tr>
                            <td>Website Redesign (with new domain and hosting)</td>
                            <td>$1500</td>
                        </tr>
                        <tr>
                            <td>Website Redesign (with new domain, hosting, and SSL)</td>
                            <td>$2000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
        </Zoom>

}