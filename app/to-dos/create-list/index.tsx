import { Button, Input, SafeAreaView, Text } from "@/components";
import BackButton from "@/components/BackButton";
import ColorChoice, { Color, ColorValues } from "@/components/ColorChoice";
import ThemeProvider from "@/components/ThemeProvider";
import { LISTS_TABLE } from "@/modules/to-dos";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { useAddRowCallback } from "tinybase/ui-react";
import { z } from "zod";

const schema = z.object({
  title: z.string({}).min(1, "obvs its gotta have a title dummy"),
  color: z.enum(Object.keys(ColorValues)),
});

type FormValues = z.infer<typeof schema>;

export default function CreateList() {
  const router = useRouter();
  const [color, setColor] = useState<Color>("red");

  const {
    handleSubmit,
    control,
    getValues,
    formState: { isValid },
  } = useForm<FormValues>({ mode: "all" });

  const handleCreateList = useAddRowCallback(
    LISTS_TABLE,
    () => ({
      title: getValues().title,
      color: getValues().color,
    }),
    [],
    undefined,
    (rowId) => router.navigate(`/to-dos/${rowId}`)
  );

  return (
    <ThemeProvider>
      <SafeAreaView>
        <BackButton />
        <Text style={styles.header}>Title</Text>
        <View style={styles.header}>
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
        </View>
        <Text style={styles.header}>Colour</Text>
        <ColorChoice onColorSelect={setColor} selectedColor={color} />
        <View style={{ marginTop: 30 }}>
          <Button
            onPress={handleSubmit(handleCreateList)}
            disabled={!isValid}
            text="Save"
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({ header: { marginBottom: 15 } });
