<?php
	include 'PDFMerger/PDFMerger.php';
	
        if (isset($_GET['listaa']))
        {
            $nombres = $_GET['listaa'];
            $lista = explode("*", $nombres);
            
            $pdf = new PDFMerger;

            foreach ($lista as $n) {
                $pdf->addPDF("Songs/" . $n, '1');
            }
            setlocale(LC_ALL, "es_ES");
            $pdf->merge('browser', 'lista ' . ucwords(strftime("%d %b") . ".pdf"));
        }
	//REPLACE 'file' WITH 'browser', 'download', 'string', or 'file' for output options
	//You do not need to give a file path for browser, string, or download - just the name.
?>