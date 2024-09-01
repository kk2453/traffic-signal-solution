package TrafficSignal_ServerSide.traffic.signal.service.impl;

import TrafficSignal_ServerSide.traffic.signal.service.ConvertFormatService;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;

@Service
public class ConvertFormatServiceImpl implements ConvertFormatService {
    @Override
    public void convertToCSV() throws IOException {

        //reading the JSON file
        JsonNode jsonTree = new ObjectMapper().readTree(new File("src/main/resources/test.json"));
        //creating a CsvSchema
        CsvSchema.Builder csvSchemaBuilder = CsvSchema.builder();
        JsonNode firstObject = jsonTree.elements().next();
        firstObject.fieldNames().forEachRemaining(fieldName -> {csvSchemaBuilder.addColumn(fieldName);} );
        CsvSchema csvSchema = csvSchemaBuilder.build().withHeader();
        //creating a CsvMapper with CsvSchema and write the json tree to csv file
        CsvMapper csvMapper = new CsvMapper();
        csvMapper.writerFor(JsonNode.class)
                .with(csvSchema)
                .writeValue(new File("src/main/resources/dataSet.csv"), jsonTree);
    }
}
