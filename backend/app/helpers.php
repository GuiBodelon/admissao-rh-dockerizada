<?php
    /**
     * Global helper Functions
     *
     * @return response()
     */
    /**
     * @param array
     */


    function buildTree(array $arrayList, string $parentKey, string $idKey)
    {
        // Group the arrayList by the parent_id key
        $grouped = [];
        foreach ($arrayList as $node){
            $grouped[$node[$parentKey]][] = $node;
        }

        // Recursive function to build the tree
        $buildTree = function($siblings) use (&$buildTree, $grouped, $parentKey, $idKey) {
            foreach ($siblings as $k => $sibling) {
                $id = $sibling[$idKey];
                // If there are child elements for this node, recursively call the buildTree function
                if(isset($grouped[$id])) {
                    $sibling['child'] = $buildTree($grouped[$id]);
                }
                $siblings[$k] = $sibling;
            }
            return $siblings;
        };

        // If there is a root node (with parent_id = 0), return the result of the buildTree function,
        // otherwise return an empty array
        if (isset($grouped[0])) {
            return $buildTree($grouped[0]);
        } else {
            return [];
        }
    }

    function gerarContrato(Request $request)
    {
        $id = $request->id;
        $vinculo = $request->vinculo;

        //Consulta o ID informado no banco e retorna as informações do colaborador
        $collaborators = Collaborators::findOrFail($id);

        if (is_null($collaborators)) {
            return $this->sendError('Colaborador não existe.');
        }

        //Atribuição do response à variáveis
        $id = $collaborators['id'];
        $name = $collaborators['nome'];
        $email = $collaborators['email_corporativo'];
        $cpf = $collaborators['cpf'];
        $cpnj = $collaborators['cpnj'];
        $razao_social = $collaborators['razao_social'];
        $estado = $collaborators['uf'];
        $cidade = $collaborators['cidade'];
        $cep = $collaborators['cep'];
        $bairro = $collaborators['bairro'];
        $rua = $collaborators['rua'];
        $numero = $collaborators['numero'];
        $complemento = $collaborators['complemento'];

        $enderecoCompleto = $rua.', '.$numero.' - '.$complemento;

        $headers = [
            'Content-Type' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
       ];

       //Verifica a relação trabalhista com o colaborador e gera o contrato com base nas informações passadas utilizando a biblioteca PhpOffice\PhpWord
       //Docs: https://phpword.readthedocs.io/en/latest/
        if($vinculo == 'Fixo'){
            //Variáveis de diretórios
            $storagePathBaseContract = storage_path('base-contracts/contrato_fixo.docx');

            //Variável 1 do arquivo
            $filename = 'Colaborador_'.str_replace(" ","",trim($name)).'-'.$email.'.docx';

            $storagePathContractMade = storage_path('contracts-made/fixos/'.$filename);

            //Variável 2 do arquivo
            $file = $storagePathContractMade;

            //Edita o contrato base e insere as informações do colaborador
            $templateProcessor = new TemplateProcessor($storagePathBaseContract);
            $templateProcessor->setValue('name', $name);
            $templateProcessor->setValue('endereco', $enderecoCompleto);
            $templateProcessor->setValue('cep', $cep);
            $templateProcessor->setValue('cnpj', $cpnj);
            //Salva no storage
            $templateProcessor->saveAs($storagePathContractMade);

            //Retornar download
            //return Storage::download($file, $filename);
            return response()->download($file, $filename, $headers);

        }
        else if($vinculo == 'Estagiário'){
            $storagePathBaseContract = storage_path('base-contracts\\contrato_estagiario.docx');
            $storagePathContractMade = storage_path('contracts-made\\estagiarios\\'.$name.'-'.$email.'.docx');

            $templateProcessor = new TemplateProcessor($storagePathBaseContract);
            $templateProcessor->setValue('name', $name);
            $templateProcessor->setValue('endereco', $enderecoCompleto);
            $templateProcessor->setValue('cep', $cep);
            $templateProcessor->setValue('cnpj', $cpnj);
            $templateProcessor->saveAs($storagePathContractMade);

            $file = $storagePathContractMade;
            $filename = 'Colaborador_'.$name.'-'.$email.'.docx';

            return response()->download($file, $filename, $headers);
        }
        else if($vinculo == 'Temporário'){
            $storagePathBaseContract = storage_path('base-contracts\\contrato_temporario.docx');
            $storagePathContractMade = storage_path('contracts-made\\temporarios\\'.$name.'-'.$email.'.docx');

            $templateProcessor = new TemplateProcessor($storagePathBaseContract);
            $templateProcessor->setValue('name', $name);
            $templateProcessor->setValue('endereco', $enderecoCompleto);
            $templateProcessor->setValue('cep', $cep);
            $templateProcessor->setValue('cnpj', $cpnj);
            $templateProcessor->saveAs($storagePathContractMade);

            $file = $storagePathContractMade;
            $filename = 'Colaborador_'.$name.'-'.$email.'.docx';
            return response()->download($file, $filename, $headers);
        }
        else if($vinculo == 'Freelancer'){
            $storagePathBaseContract = storage_path('base-contracts\\contrato_freelancer.docx');
            $storagePathContractMade = storage_path('contracts-made\\freelancers\\'.$name.'-'.$email.'.docx');

            $templateProcessor = new TemplateProcessor($storagePathBaseContract);
            $templateProcessor->setValue('name', $name);
            $templateProcessor->setValue('endereco', $enderecoCompleto);
            $templateProcessor->setValue('cep', $cep);
            $templateProcessor->setValue('cnpj', $cpnj);
            $templateProcessor->saveAs($storagePathContractMade);

            $file = $storagePathContractMade;
            $filename = 'Colaborador_'.$name.'-'.$email.'.docx';
            return response()->download($file, $filename, $headers);
        }
        else{
            return response()->json([
                'message' => 'Tipo de colaborador não condiz com o banco de dados'
            ]);
        }
    }
?>
