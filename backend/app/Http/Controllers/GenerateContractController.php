<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use PhpOffice\PhpWord\TemplateProcessor;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Response;
use ZipArchive;

class GenerateContractController extends Controller
{
    public function gerarContrato(Request $request)
    {
        $id = $request->id;
        $vinculo = $request->vinculo;

        //Consulta o ID informado no banco e retorna as informações do colaborador
        $users = User::findOrFail($id);

        if (is_null($users)) {
            return $this->sendError('Colaborador não existe.');
        }

        //Atribuição do response à variáveis
        $id = $users['id'];
        $name = $users['name'];
        $emailCorporativo = $users['email_corporativo'];
        $unidade = $users['unidade'];
        $cpf = $users['cpf'];
        $cpnj = $users['cpnj'];
        $razaoSocial = $users['razao_social'];
        $estado = $users['uf'];
        $cidade = $users['cidade'];
        $cep = $users['cep'];
        $bairro = $users['bairro'];
        $rua = $users['rua'];
        $numero = $users['numero'];
        $complemento = $users['complemento'];
        $banco = $users['banco'];
        $agencia = $users['agencia'];
        $conta = $users['conta'];
        $digito = $users['digito'];
        $enderecoCompleto = $rua.', '.$numero.' - '.$complemento;

        $today = date("Y-m-d");
        $day = date("d", strtotime($today));
        $month = date("m", strtotime($today));
        $year = date("Y", strtotime($today));

        $headers = [
            'Content-Type' => 'application/octet-stream',
        ];

       //Verifica a relação trabalhista com o colaborador e gera o contrato com base nas informações passadas utilizando a biblioteca PhpOffice\PhpWord
       //Docs: https://phpword.readthedocs.io/en/latest/
       /////////////////////////////////////////////////
       //Fixo e Temporário da unidade de negocios RPT.Sustentabilidade e Grupo report ( COM e EDU )
       if (($vinculo == 'Fixo'  && ($unidade == 'rpt.s' || $unidade == 'rpt.com' || $unidade == 'rpt.edu')) || ($vinculo == 'Temporário' && ($unidade == 'rpt.s' || $unidade == 'rpt.com' || $unidade == 'rpt.edu'))) {

            /////Variáveis de diretórios do Contrato/////
            //Diretório do contrato base
            $storagePathBaseContract = storage_path('base-contracts/fixo_temporario-rpts_rptcom_rptedu.docx');
            //Nome do Arquivo
            $filenameContract = 'Contrato-'.str_replace(" ","",trim($name)).'.docx';
            //Diretório que será salvo
            $storagePathContractMade = storage_path('contracts-made/'.preg_replace(array("/[á]/u"),array("a"),$vinculo).'/'.$filenameContract);
            //Diretório em que a API fara o request de download
            $filePathContract = $storagePathContractMade;

            //Edita o contrato base e insere as informações do colaborador
            $templateProcessor = new TemplateProcessor($storagePathBaseContract);
            $templateProcessor->setValue('enderecoCompleto', $enderecoCompleto);
            $templateProcessor->setValue('cidade', $cidade);
            $templateProcessor->setValue('estado', $estado);
            $templateProcessor->setValue('cep', $cep);
            $templateProcessor->setValue('cnpj', $cpnj);
            $templateProcessor->setValue('razaoSocial', $razaoSocial);
            //Informações bancárias
            $templateProcessor->setValue('banco', $banco);
            $templateProcessor->setValue('agencia', $agencia);
            $templateProcessor->setValue('conta', $conta);
            $templateProcessor->setValue('digito', $digito);
            //Data de Hoje
            $templateProcessor->setValue('day', $day);
            $templateProcessor->setValue('month', $month);
            $templateProcessor->setValue('year', $year);
            //Salva no storage
            $templateProcessor->saveAs($storagePathContractMade);


            /////Variáveis de diretórios do Termo de Confidêncialidade/////
            //Diretório do termo base
            $storagePathBaseTerm = storage_path('base-confidentiality-term/fixo_temporario-rpts_rptcom_rptedu.docx');
            //Nome do Arquivo
            $filenameTerm = 'Termo-'.str_replace(" ","",trim($name)).'.docx';
            //Diretório que será salvo
            $storagePathTermMade = storage_path('confidentiality-term-made/'.preg_replace(array("/[á]/u"),array("a"),$vinculo).'/'.$filenameTerm);
            //Diretório em que a API fara o request de download
            $filePathTerm = $storagePathTermMade;

            //Edita o Termo base e insere as informações do colaborador
            $templateProcessor = new TemplateProcessor($storagePathBaseTerm);
            $templateProcessor->setValue('razaoSocial', $razaoSocial);
            $templateProcessor->setValue('enderecoCompleto', $enderecoCompleto);
            $templateProcessor->setValue('cnpj', $cpnj);
            //Data de Hoje
            $templateProcessor->setValue('day', $day);
            $templateProcessor->setValue('month', $month);
            $templateProcessor->setValue('year', $year);
            //Salva no storage
            $templateProcessor->saveAs($storagePathTermMade);

            //Retorna o download
            //return Storage::download($file, $filename);

            $files = [$filePathContract, $filePathTerm];

            $zip = new ZipArchive;
            $zipFile = '/var/www/html/public/download.zip';

            if ($zip->open($zipFile, ZipArchive::CREATE) === true) {
                foreach ($files as $file) {
                    $zip->addFile($file, basename($file));
                }

                $zip->close();
            }

            return Response::download($zipFile)->deleteFileAfterSend();

        }
        //Fixo e Temporário da unidade de negocios RPT.Estrategia
        else if (($vinculo == 'Fixo' && $unidade == 'rpt.e') || ($vinculo == 'Temporário' && $unidade == 'rpt.e')) {

            /////Variáveis de diretórios do Contrato/////
            //Diretório do contrato base
            $storagePathBaseContract = storage_path('base-contracts/fixo_temporario-rpte.docx');
            //Nome do Arquivo
            $filenameContract = 'Contrato-'.str_replace(" ","",trim($name)).'.docx';
            //Diretório que será salvo
            $storagePathContractMade = storage_path('contracts-made/'.preg_replace(array("/[á]/u"),array("a"),$vinculo).'/'.$filenameContract);
            //Diretório em que a API fara o request de download
            $filePathContract = $storagePathContractMade;

            //Edita o contrato base e insere as informações do colaborador
            $templateProcessor = new TemplateProcessor($storagePathBaseContract);
            $templateProcessor->setValue('enderecoCompleto', $enderecoCompleto);
            $templateProcessor->setValue('cidade', $cidade);
            $templateProcessor->setValue('estado', $estado);
            $templateProcessor->setValue('cep', $cep);
            $templateProcessor->setValue('cnpj', $cpnj);
            $templateProcessor->setValue('razaoSocial', $razaoSocial);
            //Informações bancárias
            $templateProcessor->setValue('banco', $banco);
            $templateProcessor->setValue('agencia', $agencia);
            $templateProcessor->setValue('conta', $conta);
            $templateProcessor->setValue('digito', $digito);
            //Data de Hoje
            $templateProcessor->setValue('day', $day);
            $templateProcessor->setValue('month', $month);
            $templateProcessor->setValue('year', $year);
            //Salva no storage
            $templateProcessor->saveAs($storagePathContractMade);


            /////Variáveis de diretórios do Termo de Confidêncialidade/////
            //Diretório do termo base
            $storagePathBaseTerm = storage_path('base-confidentiality-term/fixo_temporario-rpte.docx');
            //Nome do Arquivo
            $filenameTerm = 'Termo-'.str_replace(" ","",trim($name)).'.docx';
            //Diretório que será salvo
            $storagePathTermMade = storage_path('confidentiality-term-made/'.preg_replace(array("/[á]/u"),array("a"),$vinculo).'/'.$filenameTerm);
            //Diretório em que a API fara o request de download
            $filePathTerm = $storagePathTermMade;

            //Edita o Termo base e insere as informações do colaborador
            $templateProcessor = new TemplateProcessor($storagePathBaseTerm);
            $templateProcessor->setValue('razaoSocial', $razaoSocial);
            $templateProcessor->setValue('enderecoCompleto', $enderecoCompleto);
            $templateProcessor->setValue('cnpj', $cpnj);
            //Data de Hoje
            $templateProcessor->setValue('day', $day);
            $templateProcessor->setValue('month', $month);
            $templateProcessor->setValue('year', $year);
            //Salva no storage
            $templateProcessor->saveAs($storagePathTermMade);

            //Retorna o download
            //return Storage::download($file, $filename);

            $files = [$filePathContract, $filePathTerm];

            $zip = new ZipArchive;
            $zipFile = '/var/www/html/public/download.zip';

            if ($zip->open($zipFile, ZipArchive::CREATE) === true) {
                foreach ($files as $file) {
                    $zip->addFile($file, basename($file));
                }

                $zip->close();
            }

            return Response::download($zipFile)->deleteFileAfterSend();
        }
        //Freelancer da unidade de negocios RPT.Sustentabilidade e Grupo report ( COM e EDU )
        else if($vinculo == 'Freelancer' && ($unidade == 'rpt.s' || $unidade == 'rpt.com' || $unidade == 'rpt.edu')){

            /////Variáveis de diretórios do Contrato/////
            //Diretório do contrato base
            $storagePathBaseContract = storage_path('base-contracts/freelancer-rpts_rptcom_rptedu.docx');
            //Nome do Arquivo
            $filenameContract = 'Contrato-'.str_replace(" ","",trim($name)).'.docx';
            //Diretório que será salvo
            $storagePathContractMade = storage_path('contracts-made/'.preg_replace(array("/[á]/u"),array("a"),$vinculo).'/'.$filenameContract);
            //Diretório em que a API fara o request de download
            $filePathContract = $storagePathContractMade;

            //Edita o contrato base e insere as informações do colaborador
            $templateProcessor = new TemplateProcessor($storagePathBaseContract);
            $templateProcessor->setValue('enderecoCompleto', $enderecoCompleto);
            $templateProcessor->setValue('cidade', $cidade);
            $templateProcessor->setValue('estado', $estado);
            $templateProcessor->setValue('cep', $cep);
            $templateProcessor->setValue('cnpj', $cpnj);
            $templateProcessor->setValue('razaoSocial', $razaoSocial);
            //Informações bancárias
            $templateProcessor->setValue('banco', $banco);
            $templateProcessor->setValue('agencia', $agencia);
            $templateProcessor->setValue('conta', $conta);
            $templateProcessor->setValue('digito', $digito);
            //Data de Hoje
            $templateProcessor->setValue('day', $day);
            $templateProcessor->setValue('month', $month);
            $templateProcessor->setValue('year', $year);
            //Salva no storage
            $templateProcessor->saveAs($storagePathContractMade);

            //Retornar download
            return response()->download($filePathContract, $filenameContract, $headers);
        }
        //Freelancer da unidade de negocios RPT.Estrategia
        else if ($vinculo == 'Freelancer' && $unidade == 'rpt.e') {

            /////Variáveis de diretórios do Contrato/////
            //Diretório do contrato base
            $storagePathBaseContract = storage_path('base-contracts/freelancer-rpte.docx');
            //Nome do Arquivo
            $filenameContract = 'Contrato-'.str_replace(" ","",trim($name)).'.docx';
            //Diretório que será salvo
            $storagePathContractMade = storage_path('contracts-made/'.preg_replace(array("/[á]/u"),array("a"),$vinculo).'/'.$filenameContract);
            //Diretório em que a API fara o request de download
            $filePathContract = $storagePathContractMade;

            //Edita o contrato base e insere as informações do colaborador
            $templateProcessor = new TemplateProcessor($storagePathBaseContract);
            $templateProcessor->setValue('enderecoCompleto', $enderecoCompleto);
            $templateProcessor->setValue('cidade', $cidade);
            $templateProcessor->setValue('estado', $estado);
            $templateProcessor->setValue('cep', $cep);
            $templateProcessor->setValue('cnpj', $cpnj);
            $templateProcessor->setValue('razaoSocial', $razaoSocial);
            //Informações bancárias
            $templateProcessor->setValue('banco', $banco);
            $templateProcessor->setValue('agencia', $agencia);
            $templateProcessor->setValue('conta', $conta);
            $templateProcessor->setValue('digito', $digito);
            //Data de Hoje
            $templateProcessor->setValue('day', $day);
            $templateProcessor->setValue('month', $month);
            $templateProcessor->setValue('year', $year);
            //Salva no storage
            $templateProcessor->saveAs($storagePathContractMade);

            //Retornar download
            return response()->download($filePathContract, $filenameContract, $headers);
        }
        else{
            return response()->json([
                'message' => 'Tipo de colaborador não condiz com o banco de dados'
            ]);
        }
    }

    //
    public function gerarFilenameContrato(Request $request)
    {
        $id = $request->id;

        $users = User::findOrFail($id);
        if (is_null($users)) {
            return $this->sendError('Colaborador não existe.');
        }

        $vinculo = $users['vinculo'];
        $unidade = $users['unidade'];

        if($vinculo <> 'Freelancer'){
            $filePreffix = 'PacoteColaborador-'.$vinculo.'-';
            $fileExtension = '.zip';
        }else{
            $filePreffix = 'Contrato-'.$vinculo.'-';
            $fileExtension = '.docx';
        }

        $fileSuffix = '-Unidade-'.$unidade;

        return response()->json([
            'filename' => $filePreffix.str_replace(" ","",trim($users['name'])).$fileSuffix.$fileExtension
        ]);
    }
}
