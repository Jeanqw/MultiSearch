import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "./Api";
import styles from "./ApiData.module.css"
import PrintValues from "./PrintValues.js";
function ApiData({ search }) {

    const [listaEquipments, setListaEquipments] = useState([]);
    const [listaMaterials, setListaMaterials] = useState([]);
    const [listaPurchase, setListaPurchase] = useState([]);
    const [listaSales, setListaSales] = useState([]);
    const [listaWorkforce, setListaWorkforce] = useState([]);

    //pegando os dados da API
    useEffect(() => {
        api.get('equipments').then(({ data }) => {
            setListaEquipments(data)
        });

    }, [''])

    useEffect(() => {
        api.get('materials').then(({ data }) => {
            setListaMaterials(data)
        });

    }, [''])

    useEffect(() => {
        api.get('purchase_orders').then(({ data }) => {
            setListaPurchase(data)
        });

    }, [''])

    useEffect(() => {
        api.get('sales_orders').then(({ data }) => {
            setListaSales(data)
        });

    }, [''])

    useEffect(() => {
        api.get('workforce').then(({ data }) => {
            setListaWorkforce(data)
        });

    }, [''])
    //-----------------


    //arrays para armazenar os dados e printá-los na tela
    var retornoEquipmentID = [];
    var retornoEquipmentName = [];

    var retornoMaterialID = [];
    var retornoMaterialName = [];

    var retornoPurchaseID = [];
    var retornoPurchaseName = [];
    var retornoPurchaseQtd = [];

    var retornoSalesID = [];
    var retornoSalesName = [];
    var retornoSalesQtd = [];

    var retornoWorkforceID = [];
    var retornoWorkforceName = [];
    var retornoWorkforceShift = [];

    //----------------

    var j = 0;

    if (search != "") {

        //verificando se o valor digitado pelo usuário corresponde a algum dos dados do banco

        //verificando equipamentos
        listaEquipments.map((el, i) => {
            if (el.EquipmentName.toUpperCase().indexOf(search.toUpperCase()) > -1 || el.EquipmentID.toUpperCase().indexOf(search.toUpperCase()) > -1) {
                j++;
                retornoEquipmentID[i] = "#" + el.EquipmentID;
                retornoEquipmentName[i] = el.EquipmentName;
            }
        })
        j = 0;

        //verificando produtos
        listaMaterials.map((el, i) => {
            if (el.MaterialID.toUpperCase().indexOf(search.toUpperCase()) > -1 || el.MaterialName.toUpperCase().indexOf(search.toUpperCase()) > -1) {
                j++;
                //armazenando os valores que serão mostrados ao usuário
                retornoMaterialID[i] = "#"+el.MaterialID;
                retornoMaterialName[i] = el.MaterialName;
            }
        })
        j = 0;

        //verificando pedidos de compra
        listaPurchase.map((el, i) => {
            if (el.PurchaseOrderID === search || el.DeliveryDate.toUpperCase().indexOf(search.toUpperCase()) > -1 || el.Supplier.toUpperCase().indexOf(search.toUpperCase()) > -1 || el.MaterialID.toUpperCase().indexOf(search.toUpperCase()) > -1 || el.MaterialName.toUpperCase().indexOf(search.toUpperCase()) > -1) {
                j++;
                //armazenando os valores que serão mostrados ao usuário
                retornoPurchaseID[i] = "#" + el.PurchaseOrderID;
                retornoPurchaseName[i] =  el.MaterialName;
                retornoPurchaseQtd[i] =  el.Quantity + " pçs";
            }
        })
        j = 0;

        //verificando pedidos de venda
        listaSales.map((el, i) => {
            if (el.SalesOrderID === search || el.DeliveryDate.toUpperCase().indexOf(search.toUpperCase()) > -1 || el.Customer.toUpperCase().indexOf(search.toUpperCase()) > -1 || el.MaterialID.toUpperCase().indexOf(search.toUpperCase()) > -1 || el.MaterialName.toUpperCase().indexOf(search.toUpperCase()) > -1) {
                j++;
                //armazenando os valores que serão mostrados ao usuário
                retornoSalesID[i] = "#" + el.SalesOrderID;
                retornoSalesName[i] = el.MaterialName;
                retornoSalesQtd[i] = el.Quantity + " pçs";

            }
        })
        j = 0;

        //verificando mão de obra
        listaWorkforce.map((el, i) => {
            if (el.WorkforceID === search || el.Name.toUpperCase().indexOf(search.toUpperCase()) > -1 || el.Shift.toUpperCase().indexOf(search.toUpperCase()) > -1) {
                j++;
                //armazenando os valores que serão mostrados ao usuário
                retornoWorkforceID[i] =  "#" + el.WorkforceID;
                retornoWorkforceName[i] = el.Name;
                retornoWorkforceShift[i] = el.Shift;
            }
        })
        j = 0;
    }

    return (
        <div>
            {/* retornando os valores */}
            <div className={styles.resultados}>
                <h3>Pedidos de Venda</h3>
                <div className={styles.print}>
                    <p className={styles.id}><PrintValues values={retornoSalesID} /></p>
                    <p className={styles.name}><PrintValues values={retornoSalesName} /></p>
                    <p className={styles.qtd}><PrintValues values={retornoSalesQtd} /></p>
                </div>
            </div>

            <div className={styles.resultados}>
                <h3>Pedidos de Compra</h3>
                <div className={styles.print}>
                    <p className={styles.id}><PrintValues values={retornoPurchaseID} /></p>
                    <p className={styles.name}><PrintValues values={retornoPurchaseName} /></p>
                    <p className={styles.qtd}><PrintValues values={retornoPurchaseQtd} /></p>
                </div>
            </div>

            <div className={styles.resultados}>
                <h3>Produtos</h3>
                <div className={styles.print}>
                    <p className={styles.id}><PrintValues values={retornoMaterialID} /></p>
                    <p className={styles.name}><PrintValues values={retornoMaterialName} /></p>
                </div>
            </div>

            <div className={styles.resultados}>
                <h3>Equipamentos</h3>
                <div className={styles.print}>
                    <p className={styles.id}><PrintValues values={retornoEquipmentID} /></p>
                    <p className={styles.name_eq}><PrintValues values={retornoEquipmentName} /></p>
                </div>
            </div>

            <div className={styles.resultados}>
                <h3>Mão de obra</h3>
                <div className={styles.print}>
                    <p className={styles.id}><PrintValues values={retornoWorkforceID} /></p>
                    <p className={styles.name}><PrintValues values={retornoWorkforceName} /></p>
                    <p className={styles.qtd}><PrintValues values={retornoWorkforceShift} /></p>
                </div>
            </div>
        </div>
    )
}

export default ApiData