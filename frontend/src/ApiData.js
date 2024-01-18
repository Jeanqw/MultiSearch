import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "./Api";
import styles from "./ApiData.module.css"

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

if(search!=""){

    //verificando se o valor digitado pelo usuário corresponde a algum dos dados do banco

    //verificando equipamentos
    listaEquipments.map((el, i) => {
        if (el.EquipmentName.toUpperCase().indexOf(search.toUpperCase()) >-1 || el.EquipmentID.toUpperCase().indexOf(search.toUpperCase()) >-1){
            j++;
            retornoEquipmentID[i] = "| "+ j + "° | #" + el.EquipmentID + " -- ";
            retornoEquipmentName[i] = "| "+ j + "° |" + el.EquipmentName + " -- ";
        }
    })
    j = 0;

    //verificando produtos
    listaMaterials.map((el, i) => {
        if (el.MaterialID.toUpperCase().indexOf(search.toUpperCase()) >-1 || el.MaterialName.toUpperCase().indexOf(search.toUpperCase()) >-1) {
            j++;
            //armazenando os valores que serão mostrados ao usuário
            retornoMaterialID[i] = "| "+ j + "° | #" + el.MaterialID + " -- ";
            retornoMaterialName[i] = "| "+ j + "° |" + el.MaterialName + " -- ";
        }
    })
    j = 0;

    //verificando pedidos de compra
    listaPurchase.map((el, i) => {
        if (el.PurchaseOrderID === search || el.DeliveryDate.toUpperCase().indexOf(search.toUpperCase()) >-1 || el.Supplier.toUpperCase().indexOf(search.toUpperCase()) >-1 || el.MaterialID.toUpperCase().indexOf(search.toUpperCase()) >-1 || el.MaterialName.toUpperCase().indexOf(search.toUpperCase()) >-1)
         {
            j++;
            //armazenando os valores que serão mostrados ao usuário
            retornoPurchaseID[i] = "| "+ j + "° | #" + el.PurchaseOrderID + " -- ";
            retornoPurchaseName[i] = "| "+ j + "° |" + el.MaterialName + " -- ";
            retornoPurchaseQtd[i] = "| "+ j + "° |" + el.Quantity + " pç -- ";
        }
    })
    j = 0;

    //verificando pedidos de venda
    listaSales.map((el, i) => {
        if (el.SalesOrderID === search || el.DeliveryDate.toUpperCase().indexOf(search.toUpperCase()) >-1 || el.Customer.toUpperCase().indexOf(search.toUpperCase()) >-1|| el.MaterialID.toUpperCase().indexOf(search.toUpperCase()) >-1 || el.MaterialName.toUpperCase().indexOf(search.toUpperCase()) >-1) 
        {
            j++;
            //armazenando os valores que serão mostrados ao usuário
            retornoSalesID[i] = "| "+ j + "° | #" + el.SalesOrderID + " -- ";
            retornoSalesName[i] = "| "+ j + "° |" + el.MaterialName + " -- ";
            retornoSalesQtd[i] = "| "+ j + "° |" + el.Quantity + " pç -- ";
        }
    })
    j = 0;

    //verificando mão de obra
    listaWorkforce.map((el, i) => {
        if (el.WorkforceID === search || el.Name.toUpperCase().indexOf(search.toUpperCase()) >-1 || el.Shift.toUpperCase().indexOf(search.toUpperCase()) >-1) 
        {
            j++;
            //armazenando os valores que serão mostrados ao usuário
            retornoWorkforceID[i] = "| "+ j + "° | #" + el.WorkforceID + " -- ";
            retornoWorkforceName[i] = "| "+ j + "° |" + el.Name + " -- ";
            retornoWorkforceShift[i] = "| "+ j + "° |" + el.Shift + " -- ";
        }
    })
    j = 0;
}

    return (
        <div>
            {/* retornando os valores */}
            <div className={styles.resultados}>
                <h3>Pedidos de Venda</h3>
                <p className={styles.id}>{retornoSalesID}</p>
                <p>{retornoSalesName}</p>
                <p>{retornoSalesQtd}</p>
            </div>

            <div className={styles.resultados}>
                <h3>Pedidos de Compra</h3>
                <p className={styles.id}>{retornoPurchaseID}</p>
                <p>{retornoPurchaseName}</p>
                <p>{retornoPurchaseQtd}</p>
            </div>

            <div className={styles.resultados}>
                <h3>Produtos</h3>
                <p className={styles.id}>{retornoMaterialID}</p>
                <p>{retornoMaterialName}</p>
            </div>

            <div className={styles.resultados}>
                <h3>Equipamentos</h3>
                <p className={styles.id}>{retornoEquipmentID}</p>
                <p>{retornoEquipmentName}</p>
            </div>

            <div className={styles.resultados}>
                <h3>Mão de obra</h3>
                <p className={styles.id}>{retornoWorkforceID}</p>
                <p>{retornoWorkforceName}</p>
                <p>{retornoWorkforceShift}</p>
            </div>
            
        </div>
    )
}

export default ApiData