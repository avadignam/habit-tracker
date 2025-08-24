import { Text } from "@/modules/display/blocks";
import { Back, Button } from "@/modules/display/buttons";
import { Input } from "@/modules/display/inputs";
import { SafeAreaView, ThemeProvider } from "@/modules/display/wrapper";
import { TODO_TABLE } from "@/modules/to-dos";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { useAddRowCallback } from "tinybase/ui-react";
import { z } from "zod";

const schema = z.object({
  title: z.string({}).min(1, "obvs its gotta have a title dummy"),
  parentId: z.string(),
  isCompleted: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

export default function CreateTask() {
  const { back } = useRouter();
  const { listId } = useLocalSearchParams();
  const {
    control,
    formState: { isValid },
    handleSubmit,
    getValues,
  } = useForm<FormValues>();

  const handleCreateTask = useAddRowCallback(
    TODO_TABLE,
    () => ({
      title: getValues().title,
      parentId: listId as string,
      isCompleted: false,
    }),
    [],
    undefined,
    () => back()
  );

  return (
    <ThemeProvider>
      <SafeAreaView>
        <Back />
        <Text>Title</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="title"
          render={({ field: { value, onChange } }) => (
            <Input value={value} onChangeText={onChange} />
          )}
        />
        <View style={{ marginTop: 30 }}>
          <Button
            onPress={handleSubmit(handleCreateTask)}
            disabled={!isValid}
            text="Save"
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
